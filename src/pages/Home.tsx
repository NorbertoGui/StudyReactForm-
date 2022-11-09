import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import App from '../components/App';
import './Home.css';
import { useState } from 'react';
import { format } from 'path';
import ReactDOM from 'react-dom';


const Home: React.FC = () => {
  let Pessoa: any = []
  let [Form, setForm] = useState({ "nome": "", "sobrenome": "", "email": "", "telefone": "", "cor": "", "ano": "" })

  const handlChangeNome = (e: any) => {
    if (e.target.getAttribute('name') == "nome") {
      setForm({ "nome": e.target.value, "sobrenome": Form.sobrenome, "email": Form.email, "telefone": Form.telefone, "cor": Form.cor, "ano": Form.ano })
    } else if (e.target.getAttribute('name') == "sobrenome") {
      setForm({ "nome": Form.nome, "sobrenome": e.target.value, "email": Form.email, "telefone": Form.telefone, "cor": Form.cor, "ano": Form.ano })
    } else if (e.target.getAttribute('name') == "email") {
      setForm({ "nome": Form.nome, "sobrenome": Form.sobrenome, "email": e.target.value, "telefone": Form.telefone, "cor": Form.cor, "ano": Form.ano })
    } else if (e.target.getAttribute('name') == "telefone") {
      setForm({ "nome": Form.nome, "sobrenome": Form.sobrenome, "email": Form.email, "telefone": e.target.value, "cor": Form.cor, "ano": Form.ano })
    } else if (e.target.getAttribute('name') == "cor") {
      setForm({ "nome": Form.nome, "sobrenome": Form.sobrenome, "email": Form.email, "telefone": Form.telefone, "cor": e.target.value, "ano": Form.ano })
    } else {
      setForm({ "nome": Form.nome, "sobrenome": Form.sobrenome, "email": Form.email, "telefone": Form.telefone, "cor": Form.cor, "ano": e.target.value })
    }
  }


  function mostrar() {
    console.log(Form)
    Pessoa.push(Form)
    console.log(Pessoa)
  }

  return (
    <>
    {/* <ExploreContainer/> */}
    <App/>
    
      <IonCard>
        <IonCardContent>
          <IonGrid fixed>
            <IonRow>
              <IonCol size="12">
                <IonLabel position="floating" >Nome:</IonLabel>
                <br />
                <input type="text" name='nome' value={Form.nome} onChange={(e) => handlChangeNome(e)}>
                </input>
              </IonCol>
              <IonCol size="12">
                <IonLabel position="floating" >sobrenome:</IonLabel>
                <br />
                <input type="text" name='sobrenome' value={Form.sobrenome} onChange={(e) => handlChangeNome(e)}>
                </input>
              </IonCol>
              <IonCol size="12">
                <IonLabel position="floating" >email:</IonLabel>
                <br />
                <input type="text" name='email' value={Form.email} onChange={(e) => handlChangeNome(e)}>
                </input>
              </IonCol>
              <IonCol size="12">
                <IonLabel position="floating" >telefone:</IonLabel>
                <br />
                <input type="text" name='telefone' value={Form.telefone} onChange={(e) => handlChangeNome(e)}>
                </input>
              </IonCol>
              <IonCol size="12">
                <IonLabel position="floating" >Cor:</IonLabel>
                <br />
                <input type="text" name='cor' value={Form.cor} onChange={(e) => handlChangeNome(e)}>
                </input>
              </IonCol>
              <IonCol size="12">
                <IonLabel position="floating" >Ano:</IonLabel>
                <br />
                <input type="text" name='ano' value={Form.ano} onChange={(e) => handlChangeNome(e)}>
                </input>
              </IonCol>
              <IonButton onClick={mostrar}>Mostrar</IonButton>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default Home;