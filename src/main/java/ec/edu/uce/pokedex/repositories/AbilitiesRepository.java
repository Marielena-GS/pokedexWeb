package ec.edu.uce.pokedex.repositories;

import ec.edu.uce.pokedex.jpa.Abilities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AbilitiesRepository extends JpaRepository<Abilities, Integer> {
    
}
