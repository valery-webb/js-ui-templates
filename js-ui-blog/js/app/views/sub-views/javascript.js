define([
    //'backbone'
    'text!../../templates/javascript.html'
    ,'tinyMCE'
    ],

    function (javascriptTpl, tinyMCE) {

        var JSPageView = Backbone.View.extend({

            el: '.javascript',

            template: _.template(javascriptTpl),

            events: {
                'click .save-template': 'saveTemplate'
            },

            initialize: function(){

                this.render()

                tinymce.init({
                    selector: "#tpl-editor",
                    //menubar: false,
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table contextmenu paste"
                    ],
                    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                    setup : function(ed) {
                        ed.on('init', function() {
                            ed.setContent('<b>some value from server side</b>')
                        })
                    }
                });
            },

            saveTemplate: function () {

                console.log( tinyMCE.get('tpl-editor').getContent() )
            },

            render: function() {
                this.$el.html(this.template);
                return this;
            }

        });

        return JSPageView;
});