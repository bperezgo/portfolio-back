output "ecr_url_repo" {
  description = "Ecr Repository url"
  value       = aws_ecr_repository.container_registry_repository.repository_url
}