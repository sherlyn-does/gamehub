package com.gamehub.backend;

import com.gamehub.backend.service.RawgService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class GameController {

    private final RawgService rawgService;

    public GameController(RawgService rawgService) {
        this.rawgService = rawgService;
    }

    @GetMapping("/api/games")
    public String getGames() {
        return rawgService.getGames();
    }
}