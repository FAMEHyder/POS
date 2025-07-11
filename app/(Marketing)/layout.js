
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">  
      <body>
        <h2 style={{background : 'red'}}>Header (Marketing)</h2>
        {children}
        <h2 style={{background : 'Blue'}}>Footer (Marketing)</h2>
      </body>
    </html>
  );
}
