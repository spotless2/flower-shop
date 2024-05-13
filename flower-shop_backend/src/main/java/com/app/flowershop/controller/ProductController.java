package com.app.flowershop.controller;

import com.app.flowershop.model.Product;
import com.app.flowershop.service.ProductService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestParam("file") MultipartFile file,
                                                 @RequestParam("productName") String productName,
                                                 @RequestParam("productDetails") String productDetails,
                                                 @RequestParam("productPrice") Double productPrice) {
        String fileName = saveFile(file);
        Product product = new Product();
        product.setProductName(productName);
        product.setProductDetails(productDetails);
        product.setProductPrice(productPrice);
        product.setProductPhoto(fileName);
        Product savedProduct = productService.saveProduct(product);
        return ResponseEntity.ok(savedProduct);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id,
                                                 @RequestParam("file") Optional<MultipartFile> file,
                                                 @RequestParam("productName") Optional<String> productName,
                                                 @RequestParam("productDetails") Optional<String> productDetails,
                                                 @RequestParam("productPrice") Optional<Double> productPrice) {
        Product existingProduct = productService.getProduct(id);
        if (existingProduct == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        file.ifPresent(f -> {
            String fileName = saveFile(f);
            existingProduct.setProductPhoto(fileName);
        });
        productName.ifPresent(existingProduct::setProductName);
        productDetails.ifPresent(existingProduct::setProductDetails);
        productPrice.ifPresent(existingProduct::setProductPrice);
        Product updatedProduct = productService.saveProduct(existingProduct);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        Product existingProduct = productService.getProduct(id);
        if (existingProduct == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/products/{id}/photo")
    public ResponseEntity<Resource> getProductPhoto(@PathVariable Long id) {
        Product product = productService.getProduct(id);
        Path path = Paths.get(product.getProductPhoto());
        Resource resource;
        try {
            resource = new UrlResource(path.toUri());
            if (resource.exists() || resource.isReadable()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Could not read file " + product.getProductPhoto(), e);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    private String saveFile(MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get("uploads/" + file.getOriginalFilename());
            if (!Files.exists(path.getParent())) {
                Files.createDirectories(path.getParent());
            }
            Files.write(path, bytes);
            return path.toString();
        } catch (IOException e) {
            throw new RuntimeException("Could not store file " + file.getOriginalFilename(), e);
        }
    }
}
