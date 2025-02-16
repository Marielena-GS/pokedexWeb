package ec.edu.uce.pokedex.Service;

import ec.edu.uce.pokedex.jpa.Abilities;
import ec.edu.uce.pokedex.repositories.AbilitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AbilitiesService {

    private final AbilitiesRepository abilitiesRepository;

    @Autowired
    public AbilitiesService(AbilitiesRepository abilitiesRepository) {
        this.abilitiesRepository = abilitiesRepository;
    }

    public void saveAbilities (Abilities abilities) {
        abilitiesRepository.save(abilities);
    }
    public Abilities findById(int id) {
        return abilitiesRepository.findById(id).get();
    }
}
