import React, {
  useState,
} from 'react'
import {
  EditPageStyle,
  Form,
  FormItem,
  FormItemButton,
  Spacer,
} from './EditPage.style'
import { Button, TextField } from '@material-ui/core'
import { Editor } from '@tinymce/tinymce-react';
import { useHistory, useParams } from 'react-router-dom';
import { FlashCard } from '../../types/FlashCard.type'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { saveFlashcard } from '../../reducers/FlashCard/FlashCard.reducer'
import { getFlashCardById } from '../../selectors/FlashCard/flashCard.selector'

export const EditPage: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { idFlashCard } = useParams()
  const flashCard = useSelector(getFlashCardById(idFlashCard))
  const [title, setTitle] = useState<string>(flashCard!.title)
  const [content, setContent] = useState<string>(flashCard!.content)


  const handleCancelClick = () => {
    history.go(-1)
  }

  const handleSaveClick = () => {
    const flashCardEdited: FlashCard = {
      title,
      content,
      id: flashCard?.id
    }
    dispatch(saveFlashcard({flashCard: flashCardEdited, history}))
  }
  return (
      <EditPageStyle>
        <Form>
          <FormItem>
            <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(content) => {
              setTitle(content.target.value)
            }}/>
          </FormItem>
          <FormItem>
            <Editor
                apiKey='do2a1y6y0th6odeehz6yam3k4t8lmc1vcyamm1zvxyue4t82'
                initialValue={flashCard?.content}
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
      </EditPageStyle>
  )
}
