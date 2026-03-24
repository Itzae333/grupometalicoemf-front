import { Component } from '@angular/core';
interface Account{
  id:string
  cliente:string
  cuenta:string
  alias:string
  status:string
}
@Component({
  selector: 'app-client-accounts',
  templateUrl: './client-accounts.component.html',
  styleUrls: ['./client-accounts.component.scss']
})
export class ClientAccountsComponent {

  data:Account[]=[

    {
      id:'a1',
      cliente:'Cliente Banorte',
      cuenta:'123456',
      alias:'Cuenta Principal',
      status:'ACTIVE'
    },
    {
      id:'a2',
      cliente:'Cliente BBVA',
      cuenta:'987654',
      alias:'Cuenta Operativa',
      status:'ACTIVE'
    },
    {
      id:'a3',
      cliente:'Cliente Santander',
      cuenta:'654321',
      alias:'Cuenta TDC',
      status:'INACTIVE'
    }

  ]

  create(){
    console.log("crear cuenta")
  }

  edit(row:Account){
    console.log("editar",row)
  }

  delete(row:Account){
    console.log("eliminar",row)
  }

}
