resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "${var.app_name} VPC"
    Environment = var.app_environment
  }
}

resource "aws_subnet" "main_public" {
  vpc_id     = aws_vpc.main.id
  count                   = length(var.public_subnets)
  cidr_block              = element(var.public_subnets, count.index)
  availability_zone       = element(var.availability_zones, count.index)
  map_public_ip_on_launch = true

  tags = {
    Name = "${var.app_name} public Subnet ${count.index + 1}"
    Environment = var.app_environment
  }
}

resource "aws_subnet" "main_private" {
  vpc_id     = aws_vpc.main.id
  count             = length(var.private_subnets)
  cidr_block        = element(var.private_subnets, count.index)
  availability_zone = element(var.availability_zones, count.index)

  tags = {
    Name = "${var.app_name} private Subnet ${count.index + 1}"
    Environment = var.app_environment
  }
}

resource "aws_internet_gateway" "main" {
  vpc_id   = aws_vpc.main.id

  tags = {
    Name = "${var.app_name} IG"
    Environment = var.app_environment
  }
}

resource "aws_route_table" "main" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "${var.app_name} RT"
    Environment = var.app_environment
  }
}

resource "aws_route_table_association" "main" {
  count          = length(var.public_subnets)
  subnet_id      = element(aws_subnet.main_public.*.id, count.index)
  route_table_id = aws_route_table.main.id
}