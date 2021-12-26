package com.psl.Addsportal.controller;
import java.net.URI;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psl.Addsportal.model.Offer;
import com.psl.Addsportal.repository.OfferRepository;

@RestController
@RequestMapping("/api")
public class OfferController {
	@Autowired
	private OfferRepository offerRepository ;
	@GetMapping("/offers")
	List<Offer> getOffers(){
		return offerRepository.findAll();
	}
	@DeleteMapping("/offers/{id}")
	ResponseEntity<?> deleteOffer(@PathVariable Long id){
		offerRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	@PostMapping("/offers")
	ResponseEntity<Offer> createOffer(@RequestBody Offer offer) throws URISyntaxException{
		Offer result = offerRepository.save(offer);
		return ResponseEntity.created(new URI("/api/offers" + result.getId())).body(result);
	}

}
