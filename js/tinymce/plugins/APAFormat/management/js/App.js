var App = (function () {
    function App(params) {
        var self = this;
        self.apaBook = ko.observable(false);
        self.apaChapter = ko.observable(false);
        self.apaArticle = ko.observable(false);
        self.apaEArticle = ko.observable(false);
        self.apaEPublication = ko.observable(false);
        self.apaPaper = ko.observable(false);
        self.apaNewsPaper = ko.observable(false);
        for (var prop in self) {
            if (self.hasOwnProperty(prop) && prop === params.apaFormat) {
                self[prop](true);
            }
        }
    }
    return App;
}());
ko.components.register("input-section", {
    viewModel: function (params) {
        this.label = params.label;
        this.name = params.name;
        this.type = params.type || "text";
    },
    template: "            \n        <div class=\"form-group\">\n           <label data-bind=\"text: label, attr:{ for: name }\" class=\"control-label\">...</label>\n           <input data-bind=\"attr:{id: name, name: name, type: type || 'text'}\" class=\"form-control\" />\n       </div>"
});
ko.applyBindings(new App(SOLVEX.Dynamic.params));
//# sourceMappingURL=App.js.map