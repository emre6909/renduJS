   
    fetch(`escapeGame.json`)
        .then(response => response.json())
        .then(data => {
            const main = document.querySelector("main");
             const elements = document.createElement('H1');
             elements.textContent = `${data.entreprise.nomCommercial}`;
             main.appendChild(elements)
             console.log(data.entreprise.nomCommercial);
             

             const bouton = document.createElement(`H2`)
             bouton.textContent = `${data.entreprise.phraseAccroche}`;
             main.appendChild(bouton);
             console.log(data.entreprise.phraseAccroche);

             const contenu = document.createElement('button');
             contenu.textContent = `${data.entreprise.texteAppelAction} `;
             main.appendChild(contenu)
             console.log(data.entreprise.texteAppelAction)

             const liste = document.createElement('ul');
             main.appendChild(liste);
             liste.setAttribute("id","activites");
            
                data.entreprise.avantagesClients.forEach(element => {
                    const listItem = document.createElement('li');
            listItem.textContent = element;
            liste.appendChild(listItem);
            console.log(listItem);
                  });

            console.log(data.entreprise.activites);
            data.entreprise.activites.forEach(element => {
           const ListItems = document.createElement(`H3`);
           const description = document.createElement(`p`);
           description.textContent = element.description;
           const descriptions = document.createElement(`p`);
           descriptions.textContent = element.img;
           const ListItemss = document.createElement(`div`);
           ListItemss.textContent = element.img;
           let img = document.createElement("img");
           img.src= element.image;
           main.appendChild(ListItems);
           main.appendChild(description);
           main.appendChild(img);
           
           console.log(ListItems);
           console.log(description);
           console.log(img);
            })
        
      console.log(data.entreprise.temoignages);
        data.entreprise.temoignages.forEach(index => {
       const ListItemss = document.createElement(`H3`);
       ListItemss.textContent = index.prenom;
       ListItemss.setAttribute("id","temoignages");
       const descriptions = document.createElement(`p`);
       descriptions.textContent = index.typeExperience;
       const commentaires = document.createElement(`p`);
       commentaires.textContent =  index.commentaire;   
       const descriptionss = document.createElement(`p`);
           descriptionss.textContent = index.img;
           const ListItemsss = document.createElement(`div`);
           ListItemsss.textContent = index.img;
           let img = document.createElement("img");
           img.src= index.image;
       main.appendChild(ListItemss);
       main.appendChild(descriptions);
       main.appendChild(commentaires);
       main.appendChild(img);
       console.log(ListItemss);
       console.log(descriptions);
       console.log(commentaires);
       console.log(img);
    })
    let map = L.map('map').setView([48.866667, 2.333333], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([48.866667, 2.333333]).addTo(map)
  .bindPopup('Escape game Paris')
  .openPopup();
    




});



                
                


             
             
        
       



   
