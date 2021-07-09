import CharacterItem from "./CharacterItem"

const CharacterList = ({ characters}) => {
    return (

        
  <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 content-center">
            {
                characters.map(character => (
                    <CharacterItem key={character.char_id} character={character}/>
                ))
            }
            
        </div>
    )
}
export default CharacterList