import * as bootstrap from 'bootstrap'

Template.viewAnimal.helpers({
    AnimalArray() {
        return Animaldb.find()
    }
})


Template.viewAnimal.events({ 
'click.js-editModal'(){
    document.querySelector(".editID").value = this._id
    document.querySelector('#viewPro').src = this.viewProfile
    document.querySelector('#viewName').innerHTML = `${this.Animal}`
    document.querySelector('#viewSpecies').innerHTML = this.Species
    document.querySelector('#viewDescription ').innerHTML = `Description : ${this.Description }`
    $('#editModal').modal('show')
    
    
},
'click .js-delete'() {

    
    
    const viewModal = bootstrap.Modal.getInstance('#viewModal')
    let that = this
    console.debug("deleting", that._id)
    Animaldb.remove({ "_id": that._id })
    viewModal.hide() 
    
    
    
    

    
}
})