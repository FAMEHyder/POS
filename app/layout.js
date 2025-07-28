import Header from "./header/page.jsx";
import Footer from "./footer/page.jsx";
import Sidebar from "./Sidebar/page.jsx";
import { Box } from '@mui/material';

export const metadata = {
  title: {
    template: '%s | Blog page',
    default: 'Blog Page'
  },

  description: " Hello world"
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />

        <Box display={'flex'}>

          {/* To adjust the side bar  */}
          <Box>
            <Sidebar />
          </Box>


          {/* The main component */}
          <Box>{children}</Box>

        </Box>

        <Footer />
      </body>
    </html>
  );
}
