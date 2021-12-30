//An Array Containg Objects
var employees = 
[
    {
        name: "Mudasar Ahmad",
        email: "Mud@gmail.com",
        profilePic: "images/img-1.jpg",
        isOnline: true
    },
    
    {
        name: "Bibi Shireen",
        email: "Bs@gmail.com",
        profilePic: "images/img-2.jpg",
        isOnline: false
    },
    
    {
        name: "Penno mai",
        email: "Penno@gmail.com",
        profilePic: "images/img-3.jpg",
        isOnline: true
    },
    
    {
        name: "Bashir Butt",
        email: "ahmad@gmail.com",
        profilePic: "images/img-4.jpg",
        isOnline: true
    },
    
]

//------------------------------------

//ForEach Loop to loop through array of objects
employees.forEach(function(e){
    
    //Starting list from here
    var li = "<ul><li class = 'person "
    if(e.isOnline)
        {
            li += " is-online'>";
        }
    else
        {
            li += " is-offline'>"
        }
    //Start Image Div
    var personImage = "<div class = person-img><img src='" + e.profilePic + "'></div>";
    //----- End image Div -----//
    
    //Start personInfo
    var personInfo = "<div class=person-info><h2>" + e.name + "</h2><h3>" + e.email + "</h3>";
    //------End personInfo-------//
    
    var spanContainer = "<span></span></div>";
    
    li += personImage;
    li += personInfo;
    li += spanContainer;
    li += "</li></ul>"
    
    document.write(li);
    console.log(li);
    
})