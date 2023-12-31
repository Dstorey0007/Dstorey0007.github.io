async function getData(selected_major){
    var response = await fetch('cit5students.json');

    if(response.ok) {
        var data = await response.json();
       
        major_items = data.filter( (major_items) => major_items.major == selected_major);
        
        var templateText = document.getElementById('majorTemplate').innerHTML;
        var compiledTemplateText = Handlebars.compile(templateText);
        compiledHtml = compiledTemplateText({ rows: major_items })
        documents.getElementById('majorTable').innerHTML = compiledHtml;
    }
    else {
        document.querySelector('#majorTable').innerHTML = "There was an error, or major items do not exist."
    }

}