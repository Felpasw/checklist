export type Dweek = "Domingo" | "Segunda-Feira" | "Terça-feira" | "Quarta-Feira" | "Quinta-Feira" | "Sexta-Feira" | "Sábado"


export 
interface Params{
    id: string,
    userID: string
  }


export interface Checkist{
    _id: string,
    name: string,
    description: string,
    image: string,
    DWeek: Dweek,
    userID: string
}