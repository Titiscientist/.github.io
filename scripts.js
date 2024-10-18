document.addEventListener('DOMContentLoaded', function() {
    console.log('Le site est chargé et prêt !');
});

const panier = [];

function ajouterAuPanier(produit) {
    panier.push(produit);
    afficherPanier();
}

function afficherPanier() {
    const panierElement = document.getElementById('panier');
    panierElement.innerHTML = '';
    panier.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        panierElement.appendChild(li);
    });
}

function passerCommande() {
    alert('Commande passée avec succès !');
    panier.length = 0;
    afficherPanier();
}



    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
