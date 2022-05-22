import Document,{Html,Head,Main,NextScript} from "next/document";

class Mydocument extends Document {
    render(){
        return (
            <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="https://i.ibb.co/tpck5y3/icons8-portafolio-32.png" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
  
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
            
        );
    };
};

export default Mydocument;

