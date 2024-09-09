var search_button = document.getElementById('search-btn');
search_button.addEventListener('click',searchMonument)

function searchMonument() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var monuments = document.querySelectorAll('.monument');
    var non_exist = document.querySelector('.non-exist');
    var flag = false;
    non_exist.style.display = 'none';
    monuments.forEach(function(monument) {
        
        
        
        
        var monumentId = monument.id.toLowerCase();
        if (monumentId.includes(input)) {
            monument.style.display = 'flex';
            flag =true;
            
            
           
            
        } else {
            monument.style.display = 'none';
           
        }
       
    
    
    });

    if(!flag){
        non_exist.style.display = 'block';
    }
} 