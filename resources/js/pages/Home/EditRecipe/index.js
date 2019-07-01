import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {getRecipe,updateRecipe} from "../../../actions/recipe.actions";

class EditRecipe extends Component {

    state = {
        id: null,
        recipe: null,
        save:false
    };

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const {data} = await getRecipe(id);
        this.setState({id, recipe:data});
    };

    saveRecipe = async ()=>{
        const {id,recipe} = this.state;
        this.setState({save:true});
        await updateRecipe(id,recipe);
        this.setState({save:false});
        window.history.back();
    };

    render() {

        const {save,recipe} = this.state;
        if(save){
        return ("Salvando receita....");
        }

        if (recipe) {
           return (
               <Form onSubmit={()=> {this.saveRecipe()}}>
                   <h5>Nome da Receita</h5>
                   <Form.Item>
                       <Input
                           value={recipe.title_recipe}
                           placeholder="Nome da Receita"
                           onChange={event => {
                               recipe.title_recipe = event.target.value;
                               this.setState({recipe})
                           }}
                           minLength="10"
                           required
                       />
                   </Form.Item>
                   <h5>Igredientes:</h5>
                   <Form.Item>
                       <Input.TextArea
                           rows="8"
                           value={recipe.ingredients}
                           placeholder="Ingredientes"
                           onChange={event => {
                               recipe.ingredients = event.target.value;
                               this.setState({recipe})
                               }}
                           minLength="10"
                           required
                       />
                   </Form.Item>
                   <h5>Mode de Preparo:</h5>
                   <Form.Item>
                       <Input.TextArea
                           rows="8"
                           value={recipe.mode_preparation}
                           placeholder="Modo de Preparo"
                           onChange={event => {
                               recipe.mode_preparation = event.target.value;
                               this.setState({recipe})
                           }}
                           minLength="10"
                           required
                       />
                   </Form.Item>
                   <Button onClick={()=>window.history.back()}>Cancelar</Button>
                   <Button type="primary" htmlType="submit" >Salvar</Button>

        </Form>
               );
        } else {
            return "Carregando Receita..."
        }
    }
}

export default EditRecipe;
