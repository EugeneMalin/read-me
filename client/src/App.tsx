import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from './actions';
import { Background } from './components/Background';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IStore } from './store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 0,
      minWidth: 0,
      flexGrow: 1,
      margin: theme.spacing()
    },
    header: {
      display: 'flex',
      flexGrow: 0,
    },
    main: {
      flexGrow: 1,
      overflowY: 'scroll',
    },
    footer: {
      display: 'flex',
      flexGrow: 0,
      width: '100%',
    }
  })
);

let index = 0;

export const App = () => {
  const [open, setOpen] = useState(false);

  const user = useSelector<IStore>(state => state.user);
  const dispatch = useDispatch()

  const classes = useStyles()
  return (
    <Background className={classes.background} open={open}>
      <Header 
        user={user}
        className={classes.header}
        onLogIn={() => {
          setOpen(true);
          setTimeout(() => {
            setOpen(false)
        
            dispatch(actions.user.set({
              id: 22,
              name: 'Ivan',
              email: 'ivan@gmail.ru',
              login: 'test'
            }));
          }, 1000)
        }}
        onLogOut={() => {
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
            
            dispatch(actions.user.unset());
          }, 1000)
        }}
        onSignUp={() => {
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
            dispatch(actions.persons.add({
              id: index++,
              name: `${index % 2 ? 'Jonh' : index % 3 ? 'Elisa' : 'Karl'}`,
              surname: `${index % 2 ? 'Smith' : index % 3 ? 'Marks' : 'Malin'}`,
              bio: `The person, which created ${index} position!`
            }));
          }, 1000);
        }}
        onReadNotifications={() => {
          setOpen(true);
          setTimeout(() => setOpen(false), 1000)
        }}
      />
      <Content className={classes.main}

      />
      <Footer className={classes.footer} />
    </Background>
  );
};

export default App;
