import { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
}

const html = `
  <html>
    <head>
      <body>
        <div id="root">
          <script>
            window.addEventListener('message', (event)=> {
              try {
                eval(event.data);
              } catch (err) {
                const root = document.querySelector('#root');
                root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
                console.log(err);
              }
            }, false);
          </script> 
        </div>
      </body>
    </head>
  </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, '*');
  }, [code]);
  return (
    <iframe
      ref={iframe}
      title='preview'
      sandbox='allow-scripts'
      srcDoc={html}
    />
  );
};

export default Preview;
