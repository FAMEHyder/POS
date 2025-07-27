import Header from "./header/page.js";
import Footer from "./footer/Page.js";
import Sidebar from "./Sidebar.js/page.js";
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
        <Box>
          {/* To adjust the side bar  */}
          <Box>
            <Sidebar />
            {/* The main component */}
          </Box>

          <Box>{children}</Box>

        </Box>

        <Footer />
      </body>
    </html>
  );
}
