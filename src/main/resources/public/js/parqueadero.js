/*$(document).ready(() => {
  //listado parqueadero
  const list = () => {
    $.ajax({
      url: "http://localhost:8080/parqueadero/list",
      type: "GET",
      dataType: "json",
      success: function (res) {
        let data = "";
        res.forEach((element) => {
          data += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.nit}</td>
                    <td>${element.razon_social}</td>
                    <td>${element.email}</td>
                    <td>${element.plaza_carro}</td>
                    <td>${element.plaza_moto}</td>
                    <td>
                            <button type="button" class="btn btn-primary" onclick='window.location = "/form_products.html?id=${element.id}"'>Editar</button>
                            <button type="button" class="btn btn-danger" onclick='deleteProducto(${element.id})'>Eliminar</button>
                        </td>
                </tr>
            `;
        });
        $("#parqueadero-table").html(data);
      },
    });
  };

  //guardado parqueadero
  const save = () => {
    $("#agregar").on("click", function () {
      const datosParqueadero = {
        nit: $("#nit").val(),
        razon_social: $("#razon_social").val(),
        email: $("#email").val(),
        plaza_carro: $("#plaza_carro").val(),
        plaza_moto: $("#plaza_moto").val(),
      };
      $.ajax({
        url: "http://localhost:8080/parqueadero/save",
        contentType: "aplication/json",
        type: "POST",
        data: JSON.stringify(datosParqueadero),
        dataType: "json",
        success: (data) => {
          console.log("Parqueadero resgistrado");
        },
      });
    });
  };
  //llamadas a funciones
  list();
  save();
});*/

$(document).ready(function () {
  readProducts();
});

function readProducts() {
  $("#parqueadero-table").empty();

  $.ajax({
    method: "GET",
    url: "http://localhost:8080/parqueadero/",
    type: "JSON",
    contentType: "aplication/json",
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                              <td>${data[i].id}</td>
                              <td>${data[i].nit}</td>
                              <td>${data[i].razon_social}</td>
                              <td>${data[i].email}</td>
                              <td>${data[i].plaza_carro}</td>
                              <td>${data[i].plaza_moto}</td>
                              <td>
                                  <a href="javascript:editProduct(${data[i].id})" class="btn btn-warning">Editar</span></a>
                                  <a href="javascript:deleteProduct(${data[i].id})"   class="btn btn-danger">Borrar</a>
                              </td>
                      </tr>`;
        $("#parqueadero-table").append(row);
      }
    },
  });
}

function deleteProduct(id) {
  var conf = confirm("??Est?? seguro, realmente desea eliminar el registro?");
  if (conf == true) {
    $.ajax({
      url: "http://localhost:8080/parqueadero/" + id,
      method: "DELETE",
      success: function (result) {
        readProducts();
      },
      error: function (request, msg, error) {
        // handle failure
      },
    });
  }
}

function addProduct() {
  var product = {
    nit: $("#nit").val(),
    razon_social: $("#razon_social").val(),
    email: $("#email").val(),
    plaza_carro: $("#plaza_carro").val(),
    plaza_moto: $("#plaza_moto").val(),
    //idTypeProduct: {
    //idTypeProduct: $("#tipo2").val(),
    //},
  };

  var json = JSON.stringify(product);

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/parqueadero/",
    data: json,
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      $("#add_product").modal("hide");
      readProducts();

      $("#nit").val("");
      $("#razon_social").val("");
      $("#email").val("");
      $("#plaza_carro").val("");
      $("#plaza_moto").val("");
      location.reload();
    },
  });
}

function updateProduct() {
  // get values

  var product = {
    id: sessionStorage.getItem("id"),
    nit: $("#nit2").val(),
    razon_social: $("#razon_social2").val(),
    email: $("#email2").val(),
    plaza_carro: $("#plaza_carro2").val(),
    plaza_moto: $("#plaza_moto2").val(),
  };

  var json = JSON.stringify(product);

  $.ajax({
    type: "PUT",
    url: "http://localhost:8080/parqueadero/",
    data: json,
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      $("#update_product").modal("hide");
      readProducts();
    },
  });
}

function editProduct(id) {
  sessionStorage.setItem("id", id);
  $.ajax({
    url: "http://localhost:8080/parqueadero/" + id,
    method: "GET",
    success: function (data) {
      $("#nit2").val(data.nit);
      $("#razon_social2").val(data.razon_social);
      $("#email2").val(data.email);
      $("#plaza_carro2").val(data.plaza_carro);
      $("#plaza_moto2").val(data.plaza_moto);

      $("#update_product").modal("show");
    },
    error: function (request, msg, error) {
      // handle failure
    },
  });
}
