import Header from "./header/page.js";

export const metadata = {
  title :{
    template : '%s | Blog page',
    default : 'Blog Page'
  }
  
} 

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">  
      <body>
        <Header />
        {children}
        <h2 style={{background : 'brown'}}>Footer</h2>
      </body>
    </html>
  );
}
