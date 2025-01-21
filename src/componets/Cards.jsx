import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import Editfilme from './Editfilm';

function Carde(props) {
  console.log(props);
  return (
    <div style={{ background: props.dark === true ? "black" : "white", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem", marginTop: "10%", height: "60%", padding: "2rem" }}>
      {
        props.movies.map((film) =>
          <div key={film.id} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={film.poster} />
              <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>{film.Description} <br />
                </Card.Text>
                <ReactStars
                  count={10}
                  value={film.ratings}
                  size={24}
                  color2={'#ffd700'} />
                <Card.Text>year: {film.year}</Card.Text>
                <Card.Text>dirctor: {film.dirctor}</Card.Text>

                <Button variant="primary">Go to IMDB</Button>
                <Editfilme film={film} movies={props.movies}/>
              </Card.Body>
            </Card>
            <iframe width={560} height={314} src={film.trailer} frameBorder="0"></iframe>
          </div>
        )

      }


    </div>
  );
}

export default Carde;