package com.psl.Addsportal.model;
import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@NoArgsConstructor
//@AllArgsConstructor
//@Data
@Entity
@Table(name="offer")
public class Offer {
	@Id
	private long id;
	private String descript;
	private Instant offerdate;
	
	private String location;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "cid")
	private Category category;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "eid")
	private Employee employee;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescript() {
		return descript;
	}

	public void setDescript(String descript) {
		this.descript = descript;
	}

	public Instant getOfferdate() {
		return offerdate;
	}

	public void setOfferdate(Instant offerdate) {
		this.offerdate = offerdate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Offer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Offer(long id, String descript, Instant offerdate, String location, Category category, Employee employee) {
		super();
		this.id = id;
		this.descript = descript;
		this.offerdate = offerdate;
		this.location = location;
		this.category = category;
		this.employee = employee;
	}
	
	
	
}
