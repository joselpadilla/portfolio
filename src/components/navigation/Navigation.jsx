import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'

const Navigation = ({ open, onClose }) => {
  const theme = useTheme()
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          backgroundColor: theme.palette.background.paper,
        },
      }}>
      <Box
        onClick={onClose}
        role='presentation'>
        <List>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((text) => (
            <ListItem
              key={text}
              disablePadding>
              <ListItemButton
                component='a'
                href={`#${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
export default Navigation
