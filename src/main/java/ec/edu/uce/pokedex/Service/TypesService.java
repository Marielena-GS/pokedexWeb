package ec.edu.uce.pokedex.Service;

import ec.edu.uce.pokedex.jpa.Abilities;
import ec.edu.uce.pokedex.jpa.Types;
import ec.edu.uce.pokedex.repositories.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypesService {

    private final TypesRepository typesRepository;

    @Autowired
    public TypesService(TypesRepository typesRepository) {
        this.typesRepository = typesRepository;
    }

    public void saveTypes(Types types) {
        typesRepository.save(types);
    }
    public Types findById(int id) {
        return typesRepository.findById(id).get();
    }
}
