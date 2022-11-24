
        let slideIndex = 1;
        showSlides(slideIndex);
        

        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("feeback-slide");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" dot-active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " dot-active";
          
        }

        //auto slide show
        let slideIndex2 = 0;
        showSlides2();

        function showSlides2() {
          let i;
          let slides = document.getElementsByClassName("feeback-slide");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex2++;
          if (slideIndex2 > slides.length) {slideIndex2 = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" dot-active", "");
          }
          slides[slideIndex2-1].style.display = "block";  
          dots[slideIndex2-1].className += " dot-active";
          setTimeout(showSlides2, 3000); // Change image every 3 seconds
        }



        //date picker
        const d = new Date();
        const d2 = new Date().setFullYear(d.getFullYear() + 1)
        let d3 = new Date();
        var currentMonth = d.getMonth();
        var currentDate = d.getDate();
        var currentYear = d.getFullYear();
        const date_picker = document.getElementById('datepicker');
        const date_picker2 = document.getElementById('datepicker2');


        $( function() {
            $( "#datepicker" )
            .datepicker({
                showAnim: "clip",
                dateFormat: "dd/mm/yy",
                minDate: d,
                maxDate: new Date(currentYear+1, 12, currentDate),
                onSelect: function() { 
                    var dateObject = $(this).datepicker('getDate'); 
                    console.log("date-picker: ",dateObject);
                   
                    d3= dateObject;
                    date_picker.value = d3.toLocaleDateString();
                }
                
            })
            .on('blur', function() {
                
            });


            $( "#datepicker2" )
            .datepicker({
                showAnim: "clip",
                dateFormat: "dd/mm/yy",
                minDate: d,
                maxDate: new Date(currentYear+1, 12, currentDate),
                onSelect: function() { 
                    var dateObject = $(this).datepicker('getDate'); 
                    console.log("date-picker: ",dateObject);
                   
                    d3= dateObject;
                    date_picker.value = d3.toLocaleDateString();
                }
                
            })
            .on('blur', function() {
                
            });
        } );

        console.log("---------d3: ",d3);
        date_picker.value = d3.toLocaleDateString();
        date_picker2.value = d3.toLocaleDateString();
        date_picker.addEventListener('focusout', (event) => {
            
            var value1 = (date_picker.value).toLocaleString();
            console.log("///////value:",value1);
            if((typeof(value1) !== "undefined" || value1)==true){
                 checkdate(value1)
                   
            }
            
        });
        
        function process(date){
           
            
            var parts = date.split("/");
            var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            console.log("fomat:",date.getTime())
            return date.getTime();
            
         }

        function checkdate(date2) {
                let date1 = new Date().toLocaleDateString();
                // let date2 = new Date(String(dat2)).toLocaleDateString();
                console.log(date1 > date2);
                console.log("date1",date1 );
                console.log("date-input",date2);
                if(process(date1) > process(date2)){
                    alert("Ngày hẹn khám phải bằng hoặc lớn hơn ngày hiện tại 22!");
                    date_picker.value = new Date().toLocaleDateString();
                }
        }



        
        
