
$(document).ready(function() { // Quand le document est pret
    // 🎯 Fonction pour gérer les menus déroulants
    function toggleSection(buttonId, sectionId, arrowId) {
        const button = document.getElementById(buttonId);
        const section = document.getElementById(sectionId);
        const arrow = document.getElementById(arrowId);

        button.addEventListener("click", function () {
            section.classList.toggle("hidden");
            arrow.textContent = section.classList.contains("hidden") ? "▼" : "▲";
        });
    }

    // 📌 Activer les menus déroulants
    toggleSection("togglePersonalInfo", "personalInfo", "arrowPersonal");
    toggleSection("toggleExperience", "experience-form", "arrowExperience");
    toggleSection("toggleEducation", "formation-form", "arrowEducation");
    toggleSection("toggleSkills", "competence-form", "arrowSkills");
    toggleSection("toggleLanguages", "langue-form", "arrowLanguages");
    toggleSection("toggleHobbies", "loisir-form", "arrowHobbies");
    toggleSection("toggleReference", "reference-form", "arrowReference");

    // 🎭 Prévisualisation de la photo de profil
    document.getElementById("image").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("cv-image").src = e.target.result;
                document.getElementById('image').src= e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Sauvegarde les donnees dans le Local Storage
    function saveData() {
        const cvData = {
            nom: $('#nom').val(),
            experience: $('#experience').val(),
            image: $('#image').attr('src') || '',
            email: $('#email').val(),
            tel: $('#tel').val(),
            adresse: $('#adresse').val(),
            entreprise: $('#entreprise').val(),
            age: $('#age').val(),
            titre: $('#titre').val(),
            sexe: $('#sexe').val(),
            a_propos: $('#a-propos').val(),
            nom_reference: $('#nom-reference').val(),
            poste_reference: $('#poste-reference').val(),
            contact_reference: $('#contact-reference').val(),
            situation: $('#situation').val(),
            ville: $('#ville').val(),
            poste: $('#poste').val(),
            diplome: $('#diplome').val(),
            etablissement: $('#etablissement').val(),
            annee_obtention: $('#annee-obtention').val(),
            description: $('.description').val(),
            date_debut: $('.date-debut').val(),
            date_fin: $('.date-fin').val(),
            competence: $('#competence').val(),
            langues: $('#langues').val(),
            niveau: $('#niveau').val(),
            loisir: $('#loisir').val(),
            ville_2: $('.ville').val(),
        };

        localStorage.setItem('cvData', JSON.stringify(cvData)); // Sauvegarde les donnees
    };
    $('#nom, #experience, #email, #tel, #adresse, .entreprise, #age, #titre, #sexe, #a-propos, #nom-reference, #poste-reference, #contact-reference, #situation, #ville, .poste, .ville, #diplome, #etablissement, #annee-obtention, .description, .date-debut, .date-fin, #competence, #langues, #niveau, #loisir, #image').on('input',saveData);

    // Mettre a jour l'aperçu du CV
    function updateCVPreview() {
        $('#cv-nom').text($('#nom').val());
        $('#cv-email').text($('#email').val());
        $('#cv-tel').text($('#tel').val());
        $('#cv-adresse').text($('#adresse').val());
        $('#cv-age').text($('#age').val());
        $('#cv-titre').text($('#titre').val());
        $('#cv-sexe').text($('#sexe').val());
        $('#cv-a-propos').text($('#a-propos').val());
        $('#cv-situation').text($('#situation').val());
        $('#cv-ville').text($('#ville').val());

        // Ajoue la Langue
        $('#add-langue-button').on('click', function () {
            // stop la submission du formailaire

            // Recupere les entrers 
            const langues = $('#langues').val();
            const niveau = $('#niveau').val();

            const languesElement = `
                <div class="mb-4">
                    <h3 class="font-semibold">${langues}</h3>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-500 h-2.5 rounded-full"></div>
                        <h3 class="font-semibold">${niveau}</h3>
                    </div>
                </div>
            `;

            // Ajoute la nouvelle langue au CV preview
            $('#langues-container').append(languesElement);
            $('#langue').val('');

            // efface le champs
            $('#langues-form')[0].reset();
        });

        // Ajoute les competences
        $('#add-competence-button').on('click', function () {
            
            const skill = $('#competence').val().trim(); // Recupere la competence
            const skillElement = `
                <h3 class="font-semibold">${skill}</h3>
            `;
            $('#competences-container').append(skillElement); 
            $('#competence').val(''); 
            $('#competences-form')[0].reset();
        });

        // ajouter les loisirs
        $('#add-loisir-button').on('click', function () {
             
            const loisir = $('#loisir').val();
            const loisirElement = `<ul>
                <li>${loisir}</li>
            </ul>`;
            $('#loisir-container').append(loisirElement);
            $('#loisir').val('');
            $('#loisir')[0].reset();
        });

        // Ajouter les formations
        $('#add-formation-button').on('click', function () {
             // stop la submission du formailaire
            const diplome = $('#diplome').val();
            const etablissement = $('#etablissement').val();
            const annee_obtention = $('#annee-obtention').val();

            // Cree un element de formation
            const formationElement = `<div class="mb-4">
                <div class="font-semibold">Anne d'obtention: ${annee_obtention}</div>
                <div class="text-gray-600">Diplome: ${diplome}</div>
                <div class="text-gray-600">Etablissement: ${etablissement}</div>
            </div>`;
            // Ajoute la nouvelle formation au CV preview
            $('#formations-container').append(formationElement);
            $('#formation').val('');
            $('#formation-form')[0].reset();
        });

    // Ajouter les experiences
    $('#add-experience').on('click', function() {
        const experienceForm = `
            <div class="experience-entry mb-4">
                <label for="entreprise">Entreprise</label>
                <input type="text" class="entreprise w-full border p-2 rounded-md">
                <label for="date-debut">Date de début</label>
                <input type="date" class="date-debut w-full border p-2 rounded-md">
                <label for="date-fin">Date de fin</label>
                <input type="date" class="date-fin w-full border p-2 rounded-md">
                <label for="ville">Ville</label>
                <input type="text" class="ville w-full border p-2 rounded-md">
                <label for="poste">Poste</label>
                <input type="text" class="poste w-full border p-2 rounded-md">
                <label for="description">Description</label>
                <textarea class="description w-full border p-2 rounded-md"></textarea>
                <button type="button" class="delete-experience bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
                <button type="button" class="add-experience-button bg-blue-500 text-white px-4 py-1 rounded justify-end">✔ Terminé</button> 
            </div>
        `;
        $('#experience-form').append(experienceForm);
    });

    // Supprime le formulaire le plus proche du parent
    $('#experience-form').on('click', '.delete-experience', function() {
        $(this).closest('.experience-entry').remove();
    });

    // Ajouter l'expérience au CV preview
    $('#experience-form').on('click', '.add-experience-button', function() {
        
        const experienceEntry = $(this).closest('.experience-entry');
        const poste = experienceEntry.find('input.poste').val();
        const date_debut = experienceEntry.find('input.date-debut').val();
        const date_fin = experienceEntry.find('input.date-fin').val();
        const ville = experienceEntry.find('input.ville').val();
        const entreprise = experienceEntry.find('input.entreprise').val();
        const description = experienceEntry.find('textarea.description').val();
        const experienceElement = `<div class="mb-4">
            <div class="font-semibold">Date: ${date_debut} | ${date_fin}</div>
            <div class="text-gray-600">Ville: ${ville}</div>
            <div class="text-gray-600">Entreprise: ${entreprise}</div>
            <div class="text-gray-600">Poste: ${poste}</div>
            <div class="text-gray-600">Description: ${description}</div>
        </div>`;
        $('#experiences-container').append(experienceElement);
    });

        // Ajouter les references 
        $('#add-reference-button').on('click',function(){
           
            const nom_reference= $('#nom-reference').val();
            const poste_reference= $('#poste-reference').val();
            const contact_reference= $('#contact-reference').val();
            const referenceElement = `<div class="mb-4">
                <div class="font-semibold">Nom: ${nom_reference}</div>
                <div class="text-gray-600">Poste: ${poste_reference}</div>
                <div class="text-gray-600">Contact: ${contact_reference}</div>
            </div>`;
            $('#reference-container').append(referenceElement);
            $('#reference').val('');
            $('#reference-form')[0].reset();
        });


        $('#cv-image').attr('src', $('#image').attr('src'));
    }

    // Charge les donnees sauvegarders depuis le Local Storage
    function loadSavedData() {
        const savedData = JSON.parse(localStorage.getItem('cvData')); // Recuperer les donnees sauvegardees
        if (savedData) {
            // Mettre a jour les champs avec les donnees sauvegardees
            $('#nom').val(savedData.nom);
            $('#experience').val(savedData.experience);
            if (savedData.image) {
                $('#cv-image').attr('src', savedData.image).removeClass('hidden');
            }
            $('#email').val(savedData.email);
            $('#tel').val(savedData.tel);
            $('#adresse').val(savedData.adresse);
            $('.entreprise').val(savedData.entreprise);
            $('#age').val(savedData.age);
            $('#titre').val(savedData.titre);
            $('#sexe').val(savedData.sexe);
            $('#a-propos').val(savedData.a_propos);
            $('#nom-reference').val(savedData.nom_reference);
            $('#poste-reference').val(savedData.poste_reference);
            $('#contact-reference').val(savedData.contact_reference);
            $('#situation').val(savedData.situation);
            $('#ville').val(savedData.ville);
            $('.poste').val(savedData.poste);
            $('#diplome').val(savedData.diplome);
            $('#etablissement').val(savedData.etablissement);
            $('#annee-obtention').val(savedData.annee_obtention);
            $('.description').val(savedData.description);
            $('.date-debut').val(savedData.date_debut);
            $('.date-fin').val(savedData.date_fin);
            $('#competence').val(savedData.competence);
            $('#langues').val(savedData.langues);
            $('#niveau').val(savedData.niveau);
            $('#loisir').val(savedData.loisir);
            $('.ville').val(savedData.ville_2);
            updateCVPreview(); 
        }

    // Generer le PDF
    $('#generate-pdf').on('click', function() {
        previewPDF();
    });
   };
    // Charge les donnees sauvegardees au chargement de la page



    loadSavedData();
    // Mettre a jour l'aperçu du CV en temps reel
    $('#nom, #age, #email, #tel, #adresse, #entreprise, #titre, #sexe, #a-propos, #nom-reference, #poste-reference, #contact-reference, #situation, #ville, #poste, #diplome, #etablissement, #annee-obtention, #description, #date-debut, #date-fin, #competence, #langues, #niveau, #loisir, #image').on('input', function() {
        updateCVPreview();
    });


// jsPDF pour générer un PDF à partir du contenu de la prévisualisation du CV
function previewPDF() {
    const $element = $('#cv-content');
    const options = {
        margin: 10,
        filename: 'mon-cv.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 4, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from($element[0]).outputPdf('bloburl').then((pdfUrl) => {
        window.open(pdfUrl, '_blank');
        window.open(pdfUrl, '_blank');
    });
 }

});
