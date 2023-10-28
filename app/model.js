export var wordArray = [ "home", ]; 

export function changeRoutes() { 
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", ""); 


    if (pageID != "") { 

        $.get(`pages/${pageID}/${pageID}.html`, function (data)
        {
            console.log("page " + data);
            $("#app").html(data);
        } );
      console.log(pageID);

    } else {
        $.get(`pages/home/home.html`, function (data) {
            console.log("page " + data);
            $("#app").html(data);
        });

        console.log("home");
    }
   
    


}