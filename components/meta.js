import Head from 'next/head'
export default () => {
  /*background-image: url("/static/download.jpg");
        background-repeat: no-repeat;
        backgroun-attachment: fixed;
        background-position: right bottom;*/
  return(
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body { 
        background-image: url("/static/backgroundIm.png");
        background-position: center top; 

      }
      @import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');

          @fontface {
            font-family: 'Gentium Book Basic', cursive;
            src: url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic')
          }

          
          @import url('https://fonts.googleapis.com/css?family=Montserrat');

          @fontface {
            font-family: 'Montserrat', cursive;
            src: url('https://fonts.googleapis.com/css?family=Montserrat')
          }
                 @import url('https://fonts.googleapis.com/css?family=Noto+Sans');

        @fontface {
          font-family: 'Noto Sans', cursive;
          src: url('https://fonts.googleapis.com/css?family=Noto+Sans')
        }

       @import url('https://fonts.googleapis.com/css?family=Lobster');

        @fontface {
          font-family: 'Lobster', cursive;
          src: url('https://fonts.googleapis.com/css?family=Lobster')
        }

    `}</style>
  </div>
)}
