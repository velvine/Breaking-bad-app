
const CharacterItem = ({ character }) => {
    return (
        <div className="lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none">
                <img className="w-full h-full object-cover" src={character.img} alt={character.name} />
            </div>
            <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Name: {character.name}</div>
                    <div className="text-gray-900 text-l mb-2">Nickname: {character.nickname}</div>
                    <div className="text-gray-900 text-l mb-2">Birthday: {character.birthday}</div>
                    <div className="text-gray-900 text-l mb-2">Status: {character.status}</div>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Occupations</p>
                        <div className="py-4">
                            {
                                character.occupation.map((occupation, key) => (
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2"
                                        v-for="(occupation, key) in character.occupation"
                                        key={key}
                                    >
                                        {occupation}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;