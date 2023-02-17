import * as bootstrap from 'bootstrap'

Template.addAnimal.events({
    'click .js-addModal'() {
        const addModal = new bootstrap.Modal('#addModal', {})
        document.querySelector("#addModal").addEventListener('hidden.bs.modal', event => {

            console.log("closing")
        })

        addModal.show()
    },
    'click .js-saveAnimal'() {
        const addModal = bootstrap.Modal.getInstance('#addModal')
        let image = document.querySelector("#image").value
        let viewImg = document.querySelector("#viewImg").value
        let Aname = document.querySelector("#Aname").value
        let Sname = document.querySelector("#Sname").value
        let Description = document.querySelector("#Description").value
        Animaldb.insert({
            "Animal": Aname,
            "Species": Sname,
            "Description": Description,
            "profile": image,
            "viewProfile" : viewImg

            
        })
        addModal.hide()
    },
    'input #image'() {
        const image = document.querySelector('#image')
        const imgProf = document.querySelector('#profImg')
        imgProf.src = image.value
        console.debug(image.value)
    },
    'input #viewImg'() {
        const viewImg = document.querySelector('#viewImg')
        const profView = document.querySelector('#viewProf')
        profView.src = viewImg.value
        console.debug(viewImg.value)
    },



   
})