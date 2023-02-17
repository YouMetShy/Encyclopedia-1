import * as bootstrap from 'bootstrap'

Template.listAnimal.helpers({
    AnimalArray() {
        return Animaldb.find()
    }
})

Template.listAnimal.events({
    'click .js-view'() {
        let that = this
        console.log(that.viewProfile)
        const viewModal = new bootstrap.Modal('#viewModal', {})
        document.querySelector('#viewPro').src = that.viewProfile
        document.querySelector('#viewName').innerHTML = `${that.Animal}`
        document.querySelector('#viewSpecies').innerHTML = that.Species
        document.querySelector('#viewDescription').innerHTML = `Description : ${that.Description}`
        viewModal.show()
        // Animaldb.update({
        //     "viewProfile" : viewImg
            
        // })
    },
    'click .js-delete'() {
        let that = this
        console.debug("deleting", that._id)
        Animaldb.remove({ "_id": that._id })
    }
})