// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- prototype of their respective classes ---------------------------------- */
    var slider = new PageSlider($('body'));
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    SessionListView.prototype.template = Handlebars.compile($("#session-list-tpl").html());
    SessionView.prototype.template = Handlebars.compile($("#session-tpl").html());

    var service = new ConferenceService();
    service.initialize().done(function () {
         router.addRoute('', function() {
               slider.slidePage(new HomeView(service).render().$el);
         });
         router.addRoute('sessions/:id', function(id) {
              service.findById(parseInt(id)).done(function(session) {
                 slider.slidePage(new SessionView(session).render().$el);
                });
        });
        
        router.start();
    });
    /* --------------------------------- Event Registration -------------------------------- */
    /*$('.search-key').on('keyup', findByName);
    $('.help-btn').on('click', function() {
        alert("PhoneGap Day v1.0");
    });*/
    
    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);
        if (cordova.plugins.Keyboard)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    
        if (navigator.notification) { // Override default HTML alert with native dialog
              window.alert = function (message) {
                  navigator.notification.alert(
                      message,    // message
                      null,       // callback
                      "Workshop", // title
                      'OK'        // buttonName
                  );
              };
          }
    }, false);

    


}());