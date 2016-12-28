// var URL = "/business"; //-- EDIT here 
var sURL = ""; //-- EDIT here 

var colors = [
    "red","blue","green","orange",  
    "pink", "purple", "light-blue", "cyan", 
    "light-green", "yellow", "deep-orange", 
    "deep-purple", "indigo", "teal", 
    // "lime", "amber", "brown", "grey", "blue-grey"      
];

colors = ['deep-purple']
var i = Math.floor( Math.random() * (colors.length - 0) + 0 );
var chooseColor = colors[i].toString();

var BGCOLOR = "white";
// var BGCOLOR = chooseColor;

var cssfiles = [
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/featherlight/1.5.0/featherlight.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
    //-- blog web fonts 
    // 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic',
    // 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
    'https://fonts.googleapis.com/css?family=Arimo|Athiti|Kanit:500i,800|Maitree|Mitr|Noticia+Text|Open+Sans|Pridi|Prompt|Roboto|Roboto+Slab|Trirong|Lemonada|Lobster|Noto+Serif:700i|Pattaya|Prompt:500i|Sriracha|Tinos:700i|Arima+Madurai:800|Baloo|Itim|Lalezar',
    sURL+'/assets/style.css'
];
var jsfiles = [ 
    'https://code.jquery.com/jquery-2.1.4.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/featherlight/1.5.0/featherlight.min.js',
    // 'https://apis.google.com/js/plusone.js', //-- google comments
    // URL+'/assets/jquery.waypoints.min.js', //-- scroll to view
    // URL+'/assets/inview.min.js',  //-- scroll to view
    sURL+'/assets/flowType.js',  //-- scroll to view
    sURL+'/assets/lettering.js',  //-- scroll to view
    sURL+'/assets/textillate.js',  //-- scroll to view
    // sURL+'/assets/typed.min.js',
    // 'assets/index.js', 
];

function loadAll(){
    LazyLoad.css(cssfiles, function(){});
    LazyLoad.js(jsfiles, function(){
        $(document).ready(function(){
            initAll();
        });
    });   
}
loadAll();


function initAll(){
    setColor(chooseColor);
    styleControls();
    typo();
}


function typo(){
    $('.textillate').textillate({
        type: 'char', 
        loop: true,
        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 500,
    });
    
    // $(".typing").typed({
    //     // strings: ["First sentence.", "Second sentence."],
    //     stringsElement: $('#check'),
    //     typeSpeed: 0
    // });

    // $('body').flowtype({
    //   minimum   : 480,
    //   maximum   : 1200,
    //   minFont   : 12,
    //   maxFont   : 18,
    //   fontRatio : 30
    // });
}

function setColor(COLOR){
    
    if (BGCOLOR!="white")
    	$("body").addClass(COLOR + " lighten-5");
    	
    $("nav#nav").addClass(COLOR + " darken-2 center-align");
    $(".main-color-text").addClass(COLOR + "-text text-darken-4");
    $(".main-color").addClass(COLOR + " darken-4");
    $(".progress, .indeterminate").addClass(COLOR + " lignten-1");
    $("li#avatar").addClass(COLOR + " darken-4 white-text center-align");
    $("ul#dropdown-1").addClass(COLOR + " darken-3");
    $("div#report").addClass(COLOR + " darken-4 white-text z-depth-1");
    $(".prefix").addClass(COLOR + "-text darken-4");
    $("ul.dropdown-content li a").addClass(COLOR + "-text");
    // $(".btn").addClass("waves-effect waves-light"); //- chua lam duoc
}


function styleControls(){
    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    
    $(".owl-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        margin: 20,
        autoHeight : true,
        lazyLoad : true,
        dots: false
    });

    $('ul.tabs').tabs();
    $('.collapsible').collapsible();

    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        // ready: function() { alert('Ready'); }, // Callback for Modal open
        // complete: function() { alert('Closed'); } // Callback for Modal close
    });

    // $("#your-fb.fb-comments").attr('data-href', URL); //set truoc
    $("span#current-color").html(chooseColor.toUpperCase());

    $('.button-collapse').show();
    $('.button-collapse').sideNav({
        menuWidth: 240, // Default is 240
        edge: 'right', // Choose the horizontal origin
    });

}

function checkLicense(url){
    var res = false; 
    
    //-- ajax call to check lic
    res = true;
    return res;
}

