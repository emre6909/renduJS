   
    fetch(`escapeGame.json`)
        .then(response => response.json())
        .then(data => {
             const elements = document.createElement('H1');
             elements.textContent = `${data.entreprise.nomCommercial}`;
             document.body.appendChild(elements)
             console.log(data.entreprise.nomCommercial);

             const bouton = document.createElement(`H2`)
             bouton.textContent = `${data.entreprise.phraseAccroche}`;
             document.body.appendChild(bouton)
             console.log(data.entreprise.phraseAccroche);

             const contenu = document.createElement('button');
             contenu.textContent = `${data.entreprise.texteAppelAction} `;
             document.body.appendChild(contenu)
             console.log(data.entreprise.texteAppelAction)

            
             
             

             

             const liste = document.createElement('ul');
             document.body.appendChild(liste)
            
                data.entreprise.avantagesClients.forEach(element => {
                    const listItem = document.createElement('li');
            listItem.textContent = element;
            liste.appendChild(listItem);
            console.log(listItem);
                  });

            console.log(data.entreprise.activites);
            data.entreprise.activites.forEach(element => {
           const ListItems = document.createElement(`H3`);
           ListItems.textContent = element.nom;
           const description = document.createElement(`p`);
           description.textContent = element.description;
           const descriptions = document.createElement(`p`);
           descriptions.textContent = element.img;
           const ListItemss = document.createElement(`div`);
           ListItemss.textContent = element.img;
           let img = document.createElement("img");
           img.src= element.image;
           document.body.appendChild(ListItems);
           document.body.appendChild(description);
           document.body.appendChild(img);
           
           console.log(ListItems);
           console.log(description);
           console.log(img);
            })
        
      console.log(data.entreprise.temoignages);
        data.entreprise.temoignages.forEach(index => {
       const ListItemss = document.createElement(`H3`);
       ListItemss.textContent = index.prenom;
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
       document.body.appendChild(ListItemss);
       document.body.appendChild(descriptions);
       document.body.appendChild(commentaires);
       document.body.appendChild(img);
       console.log(ListItemss);
       console.log(descriptions);
       console.log(commentaires);
       console.log(img);
    })
    




});



                
                


             
             
        
       



   
