var ConferenceService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "https://testing-c9-iamdavid2.c9.io/crawl.json'";
        var deferred = $.Deferred();
        deferred.
        resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id});
    }

    this.findByName = function(searchKey) {
     return $.ajax({
                type:'POST',
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                url: 'https://testing-c9-iamdavid2.c9.io/crawl.json', 
                data:  ("{'request':{'url':'http://www.exito.com/browse?No=1&Nrpp=80','cookies':{'selectedCity':'BG'}},'spider_name':'dmoz'}"),
            });
            
    }


}