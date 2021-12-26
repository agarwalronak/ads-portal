package com.psl.Addsportal.model;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="employee")
public class Employee {
	@Id
	private long id;
	private String name;
	private String email;
	private String password;
	private String address;
	@Column(name = "contactno")
	private int contactNo;
	@OneToMany
	private Set<Category>category;
	
	
	
}

