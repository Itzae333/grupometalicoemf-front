import { Component } from '@angular/core';
interface Client{
  id:string
  empresa:string
  nombre:string
  status:string
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  data:Client[]=[

    {
      id:'c1a21f2a',
      empresa:'Empresa MIG',
      nombre:'Cliente Banorte',
      status:'ACTIVE'
    },
    {
      id:'c2a45f7d',
      empresa:'Empresa MIG',
      nombre:'Cliente BBVA',
      status:'ACTIVE'
    },
    {
      id:'c3d55aa1',
      empresa:'Empresa MIG',
      nombre:'Cliente Santander',
      status:'INACTIVE'
    }

  ]

  create(){
    console.log("crear cliente")
  }

  edit(row:Client){
    console.log("editar",row)
  }

  delete(row:Client){
    console.log("eliminar",row)
  }

}
