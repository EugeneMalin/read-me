import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { Background } from './components/Background';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export interface IApp {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      minWidth: 0,
      flexGrow: 1,
      padding: '8px'
    },
    header: {
      display: 'flex',
      flexGrow: 0
    },
    main: {
      flexGrow: 1,
      overflowY: 'scroll'
    },
    footer: {
      display: 'flex',
      flexGrow: 0,
      width: '100%',
    }
  })
);

export const App = (props: IApp) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles()
  return (
    <Background className={classes.background} open={open}>
      <Header 
        className={classes.header}
        onLogIn={() => {
          setOpen(true);
          setTimeout(() => setOpen(false), 1000)
        }}
        onLogOut={() => {
          setOpen(true);
          setTimeout(() => setOpen(false), 1000)
        }}
        onSignUp={() => {
          setOpen(true);
          setTimeout(() => setOpen(false), 1000)
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
