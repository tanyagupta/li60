   

  var model = {
    bio : {"name": "Tanya Gupta", "role": "Technical Lead for Knowledge Management and Policy/Senior Resource Management Officer, World Bank", "contacts": {"mobile":"202-596-8091","email":"gupta.tanya@gmail.com","github":"tanyagupta","twitter":"@tanyagupta","location":"Washington DC"}, "biopic":"images/tg.jpg", "welcomeMessage":"Welcome to my resume", "skills":["javascript, jQuery, HTML,CSS, app building for Web and Google Apps"] }
,
   work : {jobs:[{"title":"Front-end developer","url":"http://myamerica.life/static/tgportfolio/index.html","dates":"2014 to Present","description":"Self taught front end skills, aspiring full stack developer","employer":"Self","location":"Washington DC"},{"title":"Senior Resource Management Officer","url":"http://www.worldbank.org/","dates":"1997 to Present","description":"Technical lead for knowledge management, policy, and audit coordination for Budget VPU","employer":"World Bank","location":"Washington DC"},{"title":"Visiting Professor","url":"http://www.northsouth.edu/","dates":"1995 to 1997","description":"Taught courses in Finance and Accounting","employer":"North South University","location":"Bangladesh, Dhaka"}]},

  projects : {projects:[{'title':'Word Tag Cloud','url':'http://www.wordtagcloud.com/','dates':'2014-2017','description':'~240k users for combined Word/Tag Cloud apps','images':'../tgportfolio/assets/wordtagcloud.png'},{'title':'Digital Citizenship Flashcards','url':'http://myamerica.life/flash_cards','dates':'2017','description':'Digital flashcards to help future citizens prepare for the civics part of their interview','images':'../tgportfolio/assets/statue-of-liberty.jpg'},{'title':'Google Apps Marketplace Add On: Pixabay','url':'https://chrome.google.com/webstore/detail/pixabay-free-images/joobpkaagmlbkkcijfepmlieedgmmdbj','dates':'2017','description':'Developed in partnership with pixabay.com to help users insert copyright free images in Google Docs','images':'https://pixabay.com/static/img/logo_square.png'},{'title':'Google Apps Marketplace Add On: Calculator (Google Docs)','url':'https://chrome.google.com/webstore/detail/gtable-calculator/fknnekoeejdjcbdokeinngldblilkedp','dates':'2016','description':'Calculator for quick and simple operations','images':'../tgportfolio/assets/calc.png'},{'title':'Google Apps Marketplace Add On: Calculator (Google Sheets)','url':'https://chrome.google.com/webstore/detail/gsheets-calc/ojfmgmplohpjbjnmddbncmeogpfjnfma','dates':'2016','description':'Calculator for quick and simple operations','images':'https://cdn.nerdwallet.com/img/icons/Calculator.svg'},{'title':'Medium Article Writer Add-On for Google Docs','url':'https://chrome.google.com/webstore/detail/medium-article-writer/iiphgmbijeplmjgbjbnfpgapfggknfop','dates':'2017','description':'The Medium Article Writer Add-on for Google Docs helps authors  to create content and publish to Medium directly from Google Docs','images':'../tgportfolio/assets/medium.png'},{'title':'Word Cloud Add-On for Google Docs','url':'https://chrome.google.com/webstore/detail/word-cloud-generator/alhnlhbhnklajhmccemipdbaifocepab','dates':'2014','description':'Word cloud generator using d3.js ~130k users','images':'../tgportfolio/assets/wordtagcloud.png'},{'title':'Pomodoro Clock (on codepen.io)','url':'https://codepen.io/tanyagupta/full/xwMOEw/','dates':'2015','description':'Clock for keeping coding time on track','images':'../tgportfolio/assets/clock.jpg'},{'title':'Wiki viewer (on codepen.io)','url':'https://codepen.io/tanyagupta/full/GoERQO','dates':'2015','description':'Wikipedia Search Tool','images':'../tgportfolio/assets/wiki.jpg'},{'title':'Tic Tac Toe','url':'https://codepen.io/tanyagupta/full/EPZZYy/','dates':'2016','description':'Play Tic Tac Toe','images':'../tgportfolio/assets/tictactoe.png'}]},
    
    
 education : {"schools":
                        [{"name":"Spring Hill College","location":"Mobile","degree":"B.S.","majors":["Economics and Finance B.S. in Business Administration"],"dates":"1993","url":"https://www.shc.edu/"},
                        {"name":"Bentley College","location":"Waltham","degree":"MBA","majors":["Finance MBA"],"dates":"1995","url":"https://www.bentley.edu/"}],
     "onlineCourses":
                        [
                        {"title": "Beginning Javascript","school":"Udacity","dates":"2017","url":"https://classroom.udacity.com/courses/ud804"},
                        {"title": "Social Network Analysis","school":"Coursera/University of Michigan","dates":"December 2012","url":"https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=108"},
                        {"title": "Front end certification","school":"freeCodeCamp","dates":"2015-2016","url":"https://www.freecodecamp.org/tanyagupta/front-end-certification"}
                        ],
                        }
    };                    
    
    
    var view_map = {
     init:function(){
       view_map.render();   
     },
     render: function(){
       $("#mapDiv").append(googleMap)   
     }
     
        
        
    }
    
    var view_projects = {
        init:function(){
            var data = controller.getData()
            var github = data.bio["contacts"]["github"];   
            var email = data.bio["contacts"]["email"];
            var twitter = data.bio["contacts"]["twitter"];
            var my_location =data.bio["contacts"]["location"];
             var formatted_email = HTMLemail.replace("%data%",data.bio.contacts.email);        
            var formatted_mobile = HTMLmobile.replace("%data%",data.bio.contacts.mobile);           
            var formatted_twitter = HTMLtwitter.replace("%data%",data.bio.contacts.twitter);            
            var formatted_github = HTMLgithub.replace("%data%",data.bio.contacts.github);            
            var formatted_location = HTMLlocation.replace("%data%",data.bio.contacts.location);            
            var formatted_biopic = HTMLbioPic.replace("%data%",data.bio.biopic)

            
            view_projects.render();

            
            
            },
            
            
        build_html: function(){
            var project_html;
            var html=""
            var data = controller.getData()
            data.projects=data.projects.projects;
            for (var i in data.projects){
            var title = HTMLprojectTitle.replace("%data%",data.projects[i].title);
            title = title.replace("#",data.projects[i].url)
            project_html=title+HTMLprojectDates.replace("%data%",data.projects[i].dates)+HTMLprojectDescription.replace("%data%",data.projects[i].description)
            +HTMLprojectImage.replace('"%data%"','"'+(data.projects[i].images)+'" class="proj_pics"');
            html=html+project_html
            
           // $(".project-entry:last").append(project_html)  
           }    
            
          return html;  
        },
        
        
        
        render:function(){
            
            
            
            $("#projects").append(HTMLprojectStart);
            var html = view_projects.build_html();
            
            $(".project-entry").append(html);
            console.log(html)
            
            }
            
            }
            
    var view_education = {
        init: function(){
            
            
            
            
        },
        render: function(){
            var data = controller.getData();
            var edu_list =    data.education.schools;
            var online = data.education.onlineCourses;
    
    
            for (var i in edu_list){
                $("#education").append(HTMLschoolStart);
                
                
                var name = HTMLschoolName.replace("%data%",edu_list[i]["name"]);
                name.replace("#",edu_list[i]["url"])
                var degree = HTMLschoolDegree.replace("%data%",edu_list[i]["degree"])
                var dates = HTMLschoolDates.replace("%data%",edu_list[i]["dates"]);
                var majors = HTMLschoolMajor.replace("%data%",edu_list[i]["majors"]);
                var loc = HTMLschoolLocation.replace("%data%",edu_list[i]["location"]);
                $(".education-entry:last").append(name+degree+dates+loc+majors)  
            }
    
     
            $("#education").append(HTMLonlineClasses);
            
            for (var i in online){
            
                 $("#education").append(HTMLschoolStart);
            
                var online_title = HTMLonlineTitle.replace("%data%",online[i].title); 
                online_title=online_title.replace("#",online[i]["url"])
        
                var online_school = HTMLonlineSchool.replace("%data%",online[i].school); 
                var online_dates  = HTMLonlineDates.replace("%data%",online[i].dates);  
               // var online_url = HTMLonlineURL.replace("%data%",online[i].url);  
        
                  $(".education-entry:last").append(online_title+online_school+online_dates+"<br>")    
            }   
            
        }
        
        
        
    };
    
    var view_jobs = {
        init: function(){
            view_jobs.render();
            
        },
        render: function(){
         var data = controller.getData();    
         var jobs_list = data.work["jobs"]
    
        for (var i=0;i<jobs_list.length;i++){
        
            $("#workExperience").append(HTMLworkStart);
        
            var employer = HTMLworkEmployer.replace("%data%",jobs_list[i]["employer"]);
            employer = employer.replace("#",jobs_list[i]["url"]);
            var title = HTMLworkTitle.replace("%data%",jobs_list[i]["title"]);
            var date = HTMLworkDates.replace("%data%",jobs_list[i]["dates"])
            var work_des = HTMLworkDescription.replace("%data%",jobs_list[i]["description"]);
            $(".work-entry:last").append(employer+title+date+work_des)    
        }   
            
            
        }
        
        
    }
            
    var view_bio = {
        init: function(){
            
            view_bio.render();   
        },
        
        render: function(){
            
            var data = controller.getData();   
            var bio_p = HTMLbioPic.replace("%data%",data.bio.biopic);
            var wel = HTMLwelcomeMsg.replace("%data%",data.bio.welcomeMessage);
            
            var header = HTMLheaderName.replace("%data%",data.bio.name);
            var role = HTMLheaderRole.replace("%data%",data.bio.role); 
          
           // $("#header").append(header+role)
            
             $("#header").prepend(header+role+bio_p)
            $("#header").append(wel)
    
            var mobile = HTMLmobile.replace("%data%",data.bio.contacts.mobile);
            var email = HTMLemail.replace("%data%",data.bio.contacts.email);
            var twitter = HTMLtwitter.replace("%data%",data.bio.contacts.twitter);
            var github = HTMLgithub.replace("%data%",data.bio.contacts.github);
            var loc = HTMLlocation.replace("%data%",data.bio.contacts.location);
            
    
            $("#topContacts").append(mobile+email+twitter+github+loc);
            
            $("#footerContacts").append(mobile+email+twitter+github+loc)
           
    
            
            
            if(data.bio.skills){
            $("#header").append(HTMLskillsStart);
            var skills = data.bio.skills[0].split(",") 
            var skills_html="";
             for (var i=0; i<skills.length;i++){
                 skills_html=skills_html+HTMLskills.replace("%data%",skills[i])
             }
    
             $("#skills").append(skills_html)
                
    }
       

        
        },
        
        
        
        
    }
    
    
    var controller = {
        init:function(){
            view_projects.init();
            view_projects.init();
            view_education.init();
            view_jobs.init();
            view_bio.init();
            view_map.init();
            
            
            
            },
         getData: function(){

           return model;
        
        },    
        
        render: function(){}
        
        
        
        };
    
    
controller.init();
    

  
    
    

    

    
  
    
  