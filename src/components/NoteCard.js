import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  avatar: {
    border: (note) => {
      if (note.category === 'money') {
        return '3px solid yellow'
      }
      if (note.category === 'todos') {
        return '2px solid green'
      }
      if (note.category === 'reminders') {
        return '2px solid blue'
      }
      if (note.category === 'work') {
        return '2px solid orange'
      }
    },
    color: '#373737',
    fontWeight: 'bold',
    backgroundColor: (note) => {
      if (note.category === 'money') {
        return 'rgba(255, 255, 0, 0.07)'
      }
      if (note.category === 'todos') {
        return 'rgba(0, 255, 0, 0.07)'
      }
      if (note.category === 'reminders') {
        return 'rgba(0, 0, 255, 0.07)'
      }
      if (note.category === 'work') {
        return 'rgba(255, 165, 0, 0.07)'
      }
    }
  }
})

const NoteCard = ({ note, deleteNote }) => {
  const { id, title, details, category } = note
  const classes = useStyles(note)

  return (
    <Card elevation={3} className={classes.avatar}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => deleteNote(id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={title}
        subheader={category}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {details}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default NoteCard;
