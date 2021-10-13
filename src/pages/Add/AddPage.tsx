import React, { useState } from 'react'
import {
  AddPageStyle,
  Form,
  FormItem,
  FormItemButton,
  Spacer,
} from './AddPage.style'
import { Button, TextField } from '@material-ui/core'
import { Editor } from '@tinymce/tinymce-react';
import { useHistory } from 'react-router-dom';
import { FlashCard } from '../../types/FlashCard.type'
import { useDispatch } from 'react-redux'
import { saveFlashcard } from '../../reducers/FlashCard/FlashCard.reducer'

export const AddPage: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const handleCancelClick = () => {
    history.go(-1)
  }

  const handleSaveClick = () => {
    const flashCard: FlashCard = {
      title,
      content
    }
    dispatch(saveFlashcard({flashCard, history}))
  }
  return (
      <AddPageStyle>
        <Form>
          <FormItem>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(content) => {
              setTitle(content.target.value)
            }}/>
          </FormItem>
          <FormItem>
            <Editor
                apiKey='do2a1y6y0th6odeehz6yam3k4t8lmc1vcyamm1zvxyue4t82'
                initialValue=""
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar:
                  // eslint-disable-next-line no-multi-str
                      'undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help'
                }}
                onChange={(content) => {
                  setContent(content.target.getContent())
                }}
            />
          </FormItem>
          <FormItemButton>
            <Button variant="contained" color="primary" disableElevation onClick={handleSaveClick}>Salvar</Button>
            <Spacer />
            <Button variant="contained" color="default" disableElevation onClick={handleCancelClick}>Cancellar</Button>
          </FormItemButton>
        </Form>
      </AddPageStyle>
  )
}
