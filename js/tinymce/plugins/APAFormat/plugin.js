tinymce.PluginManager.add("APAFormat", function (editor, url) {

    editor.addButton("APAFormat", {
        type: "menubutton",
        text: "Formato APA",
        icon: false,
        menu: [{
            icon: "none fontAwesome fa fa-book",
            text: "Libro",
            onclick: function () {
                editor.windowManager.open({
                    title: "Generar citas APA para Libro",
                    url: url + "/management/APAForms.html",
                    width: 700,
                    height: 500,
                    buttons: [
                        {
                            text: "Insertar",
                            onclick: function () {
                                let win = editor.windowManager.getWindows()[0];
                                let documentContext = win.getContentWindow().document;
                                let datos = getFormData($(documentContext).find("#APABook"));
                                datos.type = 'book';
                                if (moment(datos.year).isValid()) {
                                    datos.year = moment(datos.year).year();
                                };
                                editor.insertContent(getContentAPA(datos));
                                win.close();
                            }
                        },

                        { text: "Cerrar", onclick: "close" }
                    ]
                }, {
                    apaFormat: "apaBook"
                });
            }
        }, {
            icon: "none fontAwesome fa fa-map",
            text: "Cap\u00edtulo",
            onclick: function () {
                    editor.windowManager.open({
                        title: "Generar citas APA para Cap\u00edtulo",
                        url: url + "/management/APAForms.html",
                        width: 700,
                        height: 550,
                        buttons: [
                            {
                                text: "Insertar",
                                onclick: function () {
                                    let win = editor.windowManager.getWindows()[0];
                                    let documentContext = win.getContentWindow().document;
                                    let datos = getFormData($(documentContext).find("#APAChapter"));
                                    datos.type = 'chapter';
                                    if (moment(datos.year).isValid()) {
                                        datos.year = moment(datos.year).year();
                                    };
                                    datos.pages = [datos.pageFrom, datos.pageTo];
                                    editor.insertContent(getContentAPA(datos));
                                    win.close();
                                }
                            },

                            { text: "Cerrar", onclick: "close" }
                        ]
                    }, {
                        apaFormat: "apaChapter"
                    });
                }
        }, {
            icon: "none fontAwesome fa fa-newspaper-o",
            text: "Peri\u00f3dico",
            onclick: function () {
                editor.windowManager.open({
                    title: "Generar citas APA para Peri\u00f3dico",
                    url: url + "/management/APAForms.html",
                    width: 700,
                    height: 250,
                    buttons: [
                        {
                            text: "Insertar",
                            onclick: function () {
                                let win = editor.windowManager.getWindows()[0];
                                let documentContext = win.getContentWindow().document;
                                let datos = getFormData($(documentContext).find("#APANewsPaper"));
                                datos.type = 'newspaper-article';

                                if (moment(datos.pubdate).isValid()) {
                                    datos.pubdate = {
                                        from: [moment(datos.pubdate).date(), moment(datos.pubdate).month(), moment(datos.pubdate).year()]
                                    };
                                };
                                datos.pages = [datos.pageFrom, datos.pageTo];
                                editor.insertContent(getContentAPA(datos));
                                win.close();
                            }
                        },

                        { text: "Cerrar", onclick: "close" }
                    ]
                }, {
                    apaFormat: "apaNewsPaper"
                });
            }
        }, {
            icon: "none fontAwesome fa fa-file-text-o",
            text: "Articulo",
            onclick: function () {
                editor.windowManager.open({
                    title: "Generar citas APA para Articulo",
                    url: url + "/management/APAForms.html",
                    width: 700,
                    height: 330,
                    buttons: [
                        {
                            text: "Insertar",
                            onclick: function () {
                                let win = editor.windowManager.getWindows()[0];
                                let documentContext = win.getContentWindow().document;
                                let datos = getFormData($(documentContext).find("#APAArticle"));
                                datos.type = 'article';
                                if (moment(datos.year).isValid()) {
                                    datos.year = moment(datos.year).year();
                                };
                                datos.pages = [datos.pageFrom, datos.pageTo];
                                editor.insertContent(getContentAPA(datos));
                                win.close();
                            }
                        },

                        { text: "Cerrar", onclick: "close" }
                    ]
                }, {
                    apaFormat: "apaArticle"
                });
            }  
        }, {
            icon: "none fontAwesome fa fa-file-text",
            text: "Articulo Electr",
            onclick: function () {
                editor.windowManager.open({
                    title: "Generar citas APA para Articulo Electr",
                    url: url + "/management/APAForms.html",
                    width: 700,
                    height: 400,
                    buttons: [
                        {
                            text: "Insertar",
                            onclick: function () {
                                let win = editor.windowManager.getWindows()[0];
                                let documentContext = win.getContentWindow().document;
                                let datos = getFormData($(documentContext).find("#APAEArticle"));
                                datos.type = 'e-article';
                                datos.pages = [datos.pageFrom, datos.pageTo];
                                if (moment(datos.year).isValid()) {
                                    datos.year = moment(datos.year).year();
                                };
                                if (moment(datos.date).isValid()) {
                                    datos.date = {
                                        from: [moment(datos.date).date(), moment(datos.date).month(), moment(datos.date).year()]
                                    };
                                };
                                editor.insertContent(getContentAPA(datos));
                                win.close();
                            }
                        },

                        { text: "Cerrar", onclick: "close" }
                    ]
                }, {
                    apaFormat: "apaEArticle"
                });
            }
        }, {
            icon: "none fontAwesome fa fa-file-o",
            text: "Documento",
            onclick: function () {
                editor.windowManager.open({
                    title: "Generar citas APA para Documento",
                    url: url + "/management/APAForms.html",
                    width: 700,
                    height: 380,
                    buttons: [
                        {
                            text: "Insertar",
                            onclick: function () {
                                let win = editor.windowManager.getWindows()[0];
                                let documentContext = win.getContentWindow().document;
                                let datos = getFormData($(documentContext).find("#APAPaper"));
                                datos.type = 'paper';

                                datos.conference = {};
                                datos.conference.name = datos.name;
                                datos.conference.org = datos.org;
                                datos.conference.place = datos.place;
                                datos.conference.country = datos.country;
                                editor.insertContent(getContentAPA(datos));
                                win.close();
                            }
                        },

                        { text: "Cerrar", onclick: "close" }
                    ]
                }, {
                    apaFormat: "apaPaper"
                });
            }
        }, {
            icon: "none fontAwesome fa fa-at",
            text: "Publicaci\u00f3n Electr",
            onclick: function () {
                editor.windowManager.open({
                    title: "Generar citas APA para Publicaci\u00f3n Electr",
                    url: url + "/management/APAForms.html",
                    width: 700,
                    height: 350,
                    buttons: [
                        {
                            text: "Insertar",
                            onclick: function () {
                                let win = editor.windowManager.getWindows()[0];
                                let documentContext = win.getContentWindow().document;
                                let datos = getFormData($(documentContext).find("#APAEPublication"));
                                datos.type = 'e-publication';
                                if (moment(datos.pubdate).isValid()) {
                                    datos.pubdate = {
                                        from: [moment(datos.pubdate).date(), moment(datos.pubdate).month(), moment(datos.pubdate).year()]
                                    };
                                };
                                if (moment(datos.date).isValid()) {
                                    datos.date = {
                                        from: [moment(datos.date).date(), moment(datos.date).month(), moment(datos.date).year()]
                                    };
                                };
                                editor.insertContent(getContentAPA(datos));
                                win.close();
                            }
                        },

                        { text: "Cerrar", onclick: "close" }
                    ]
                }, {
                    apaFormat: "apaEPublication"
                });
            }
        }]
    });

});

function getContentAPA(datos) {
    let citation = Cite(
      datos, 
      {
          type: "string",
          format: "html",
          style: "apa",
          lan: "es"
      }
    );

    if (citation.get() === "<p>.</p>" ||
        citation.get() === "<p></p>" ||
        citation.get() === "<p><i></i>. </p>" ||
        citation.get().trim() === "") {
       return  "";
    } else {
        return citation.get()
    }
}

function getFormData($form){
    var unindexedArray = $form.serializeArray();
    var indexedArray = {};

    $.map(unindexedArray, function(n, i){
        indexedArray[n["name"]] = n["value"];
    });

    return indexedArray;
}