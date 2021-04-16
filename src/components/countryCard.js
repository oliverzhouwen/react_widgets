import { Card, Icon, Image } from 'semantic-ui-react';
import '../style/countryCard.css';

const CountryCard = (props) => {
    return (
        <Card id="countryCard">
            <Image src={props.flag} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>
                <span className='date' id='region'>{props.region}</span>
            </Card.Meta>
            <Card.Description>
                <div><span id="info">Capital</span>{props.capital}</div>
                <div><span id="info">Population</span>{props.population}</div>
                <div><span id="info">Language</span>{props.language}</div>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href={`https://en.wikipedia.org/wiki/${props.name}`} target="_blank">
                <Icon name='angle right' />
                Visit {props.name}'s Wikipedia page
            </a>
            </Card.Content>
        </Card>
    )
}

export default CountryCard;